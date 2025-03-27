import { defineFeature, loadFeature } from 'jest-cucumber'
import { IUser } from '../../../src/domain/data/model/IUser'
import { prismaMock } from '../../infra/prisma/PrismaClientMock'
import { UserRepository } from '../../../src/data/repository/user/UserRepository'

const feature = loadFeature('./src/data/repository/user/User.feature')

defineFeature(feature, test => {
  test('Cadastrar um usuário', ({ given, when, then }) => {
    let data: IUser
    let result: IUser

    given('as informações de um usuário', (docString) => {
      data = JSON.parse(docString)
    })

    when('uma chamada no método Criar repositório do usuário é feita', async () => {
      prismaMock.user.create.mockResolvedValueOnce({ id: 'any_id', ...data })

      const userRepository = new UserRepository(prismaMock)
      result = await userRepository.create(data)
    })

    then('registra o usuário e retorna o mesmo com seu id', (docString) => {
      const expectedResult: IUser = JSON.parse(docString)
      expect(result.id).toEqual(expectedResult.id)
      expect(result.name).toEqual(expectedResult.name)
      expect(result.email).toEqual(expectedResult.email)
      expect(result.password).toEqual(expectedResult.password)
      expect(result.companyId).toEqual(expectedResult.companyId)
      expect(result.jobFunction).toEqual(expectedResult.jobFunction)
    })
  })

  test('Cadastrar um usuário sem um atributo email', ({ given, when, then }) => {
    let data: IUser
    let result: any

    given(/^as informações de um usuário sem o (.*)$/, (arg0, docString) => {
      data = JSON.parse(docString)
    })

    when(/^uma chamada no método Criar repositório do usuário sem o (.*) é feita$/, (arg0) => {
      prismaMock.user.create.mockRejectedValueOnce(new Error('Email is required'))

      const userRepository = new UserRepository(prismaMock)
      result = userRepository.create(data)
    })

    then(/^retornar um erro ao registrar o usuário sem (.*)$/, async (arg0) => {
      await expect(result).rejects.toThrow('Email is required')
    })
  })

  test('Cadastrar um usuário sem um atributo name', ({ given, when, then }) => {
    let data: IUser
    let result: any

    given(/^as informações de um usuário sem o (.*)$/, (arg0, docString) => {
      data = JSON.parse(docString)
    })

    when(/^uma chamada no método Criar repositório do usuário sem o (.*) é feita$/, (arg0) => {
      prismaMock.user.create.mockRejectedValueOnce(new Error('Name is required'))

      const userRepository = new UserRepository(prismaMock)
      result = userRepository.create(data)
    })

    then(/^retornar um erro ao registrar o usuário sem (.*)$/, async (arg0) => {
      await expect(result).rejects.toThrow('Name is required')
    })
  })

  test('Cadastrar um usuário sem um atributo password', ({ given, when, then }) => {
    let data: IUser
    let result: any

    given(/^as informações de um usuário sem o (.*)$/, (arg0, docString) => {
      data = JSON.parse(docString)
    })

    when(/^uma chamada no método Criar repositório do usuário sem o (.*) é feita$/, (arg0) => {
      prismaMock.user.create.mockRejectedValueOnce(new Error('Password is required'))

      const userRepository = new UserRepository(prismaMock)
      result = userRepository.create(data)
    })

    then(/^retornar um erro ao registrar o usuário sem (.*)$/, async (arg0) => {
      await expect(result).rejects.toThrow('Password is required')
    })
  })
})
