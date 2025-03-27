# language: pt

Funcionalidade: Usuário

  Cenario: Cadastrar um usuário
    Dado as informações de um usuário
    """
    {
      "name": "Michael Jackson",
      "email": "any_email",
      "password": "any_password",
      "jobFunction": "admin",
      "companyId": "any_id"
    }

    """
    Quando uma chamada no método Criar repositório do usuário é feita
    Então registra o usuário e retorna o mesmo com seu id
    """
    {
      "id": "any_id",
      "name": "Michael Jackson",
      "email": "any_email",
      "password": "any_password",
      "jobFunction": "admin",
      "companyId": "any_id"
    }
    """

  Cenario: Cadastrar um usuário sem um atributo email
    Dado as informações de um usuário sem o "email"
    """
    {
      "name": "Michael Jackson",
      "password": "any_password",
      "jobFunction": "admin",
      "companyId": "any_id"
    }
    """
    Quando uma chamada no método Criar repositório do usuário sem o "Email" é feita
    Então retornar um erro ao registrar o usuário sem "Email"

  Cenario: Cadastrar um usuário sem um atributo name
    Dado as informações de um usuário sem o "name"
    """
    {
      "email": "any_email",
      "password": "any_password",
      "jobFunction": "admin",
      "companyId": "any_id"
    }
    """
    Quando uma chamada no método Criar repositório do usuário sem o "Name" é feita
    Então retornar um erro ao registrar o usuário sem "Name"

  Cenario: Cadastrar um usuário sem um atributo password
    Dado as informações de um usuário sem o "password"
    """
    {
      "name": "Michael Jackson",
      "email": "any_email",
      "jobFunction": "admin",
      "companyId": "any_id"
    }
    """
    Quando uma chamada no método Criar repositório do usuário sem o "Password" é feita
    Então retornar um erro ao registrar o usuário sem "Password"

