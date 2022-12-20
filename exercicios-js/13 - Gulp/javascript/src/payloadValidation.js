const validation = (data) => {
    const payload = JSON.parse(data)

    const dadosEkit = {
        field: payload.Dados.EKit,
        catch: {
            status: 'error',
            message: 'Informe a opção de E-KIT'
        }
    }

    if (!dadosEkit.field) return dadosEkit.catch

    const contrato = {
        field: payload.Contratos.length,
        catch: {
            status: 'error',
            message: 'Contrato não informado'
        }
    }

    if (contrato.field === 0) return contrato.catch

    // Valida se o boleto foi informado

    const boleto = {
        field: Object.keys(payload.DadosPagamento.Boleto).length,
        catch: {
            status: 'error',
            message: 'Boleto OnLine é obrigatório'
        }
    }

    if (boleto.field === 0) return boleto.catch

    // Valida se o email do boleto foi informado
    const boletoEmail = {
        field: payload.DadosPagamento.Boleto.Email,
        catch: {
            status: 'error',
            message: 'Email de Boleto OnLine não informado'
        }
    }

    if (!boletoEmail.field) return boletoEmail.catch

    const boletoNome = {
        field: payload.DadosPagamento.Boleto.Nome,
        catch: {
            status: 'error',
            message: 'Nome de Boleto OnLine não informado'
        }
    }

    if (!boletoNome.field) return boletoNome.catch

    // Valida se pelo menos 1 plano do grupo Produtos Contratados foi informado

    const planoContratoSaude = {
        field: Object.keys(payload.Contratos[0].PlanoContratadoSaude).length,
        catch: {
            status: 'error',
            message: 'Nenhum Plano foi informado'
        }
    }

    const planoContratoDental = {
        field: Object.keys(payload.Contratos[0].PlanoContratadoDental).length,
        catch: {
            status: 'error',
            message: 'Nenhum Plano foi informado'
        }
    }

    const checkPlanos = planoContratoSaude.field === 0 && planoContratoDental.field === 0

    if (checkPlanos) return planoContratoDental.catch

    // Valida se o endereço da empresa foi informado

    const empresaEndereco = {
        field: payload.Empresa.Endereco,
        catch: {
            status: 'error',
            message: 'Insc. Estadual não informada'
        }
    }

    if (!empresaEndereco.field) return empresaEndereco.catch

    const empresaInscricaoEstadual = {
        field: payload.Empresa.InscricaoEstadual,
        catch: {
            status: 'error',
            message: 'Endereço não informado'
        }
    }

    if (!empresaInscricaoEstadual.field) return empresaInscricaoEstadual.catch

    // Valida se o CEP da empresa foi informado

    const empresaCep = {
        field: payload.Empresa.Endereco.Endereco.Cep,
        catch: {
            status: 'error',
            message: 'Informe o CEP do Endereço'
        }
    }

    if (!empresaCep.field) return empresaCep.catch

    // Valida se pelo menos 1 telefone foi informado

    const empresaTelefone = {
        telefone1: payload.Empresa.Endereco.Telefone,
        telefone2: payload.Empresa.EnderecoCorrespondencia.Telefone,
        telefone3: payload.Empresa.ContatoComercial.Telefone,
        telefone4: payload.Empresa.ContatoFaturamento.Telefone,
        get field() { return this.telefone1 || this.telefone2 || this.telefone3 || this.telefone4 },
        catch: {
            status: 'error',
            message: 'Informe pelo menos um telefone'
        }
    }

    if (!empresaTelefone.field) return empresaTelefone.catch

    // Valida se o CPF do responsável do grupo Dados Proposta foi informado

    const responsavelCpf = {
        field: payload.Responsavel.Cpf,
        catch: {
            status: 'error',
            message: 'CPF do responsável não informado'
        }
    }

    if (!responsavelCpf.field) return responsavelCpf.catch

    // Valida se o bairro foi informado

    const empresaBairro = {
        bairro1: payload.Empresa.Endereco.Endereco.Bairro,
        bairro2: payload.Empresa.EnderecoCorrespondencia.Endereco.Bairro,
        get field() { return this.bairro1 || this.bairro2 },
        catch: {
            status: 'error',
            message: 'Informe o bairro'
        }
    }

    if (!empresaBairro.field) return empresaBairro.catch

    // Valida se o logradouro foi informado

    const empresaLogradouro = {
        logradouro1: payload.Empresa.Endereco.Endereco.Logradouro,
        logradouro2: payload.Empresa.EnderecoCorrespondencia.Endereco.Logradouro,
        get field() { return this.logradouro1 || this.logradouro2 },
        catch: {
            status: 'error',
            message: 'Informe o Nome do Logradouro'
        }
    }

    if (!empresaLogradouro.field) return empresaLogradouro.catch

    // Valida se o número do endereço foi informado nos dados da empresa

    const empresaNumEndereco = {
        numero1: payload.Empresa.Endereco.Endereco.Numero,
        numero2: payload.Empresa.EnderecoCorrespondencia.Endereco.Numero,
        get field() { return this.numero1 || this.numero2 },
        catch: {
            status: 'error',
            message: 'Informe o número do endereço'
        }
    }

    if (!empresaNumEndereco.field) return empresaNumEndereco.catch

    // Valida se o email foi informado nos dados do contrato.

    titularEmail = {
        field: payload.Contratos[0].Titular.Contato.Email,
        catch: {
            status: 'error',
            message: 'Para Adesão ao Boleto OnLine o Email é obrigatório'
        }
    }

    if (!titularEmail.field) return titularEmail.catch

    // Valida se pelo menos 1 número de endereço do titular foi informado

    const titularNumEndereco = {
        numero1: payload.Contratos[0].Titular.Endereco.Numero,
        numero2: payload.Contratos[0].Titular.EnderecoCorrespondencia.Numero,
        numero3: payload.Contratos[0].Titular.Contato.Endereco.Numero,
        get field() { return this.numero1 || this.numero2 || this.numero3 },
        catch: {
            status: 'error',
            message: 'Número do endereço não informado'
        }
    }

    if (!titularNumEndereco.field) return titularNumEndereco.catch

    // Valida se pelo menos 1 logradouro do titular foi informado

    const titularLogradouro = {
        logradouro1: payload.Contratos[0].Titular.Endereco.Logradouro,
        logradouro2: payload.Contratos[0].Titular.EnderecoCorrespondencia.Logradouro,
        logradouro3: payload.Contratos[0].Titular.Contato.Endereco.Logradouro,
        get field() { return this.logradouro1 || this.logradouro2 || this.logradouro3 },
        catch: {
            status: 'error',
            message: 'Informe o Nome do Logradouro'
        }
    }

    if (!titularLogradouro.field) return titularLogradouro.catch

    const dependentesPlano = () => {

    }

    // Valida se o CPF do titular foi informado

    const titularCpf = {
        field: payload.Contratos[0].Titular.Cpf,
        catch: {
            status: 'error',
            message: 'CPF do Titular não informado'
        }
    }

    if (!titularCpf.field) return titularCpf.catch

    // Valida se pelo menos 1 bairro do titular foi informado

    const titularBairro = {
        bairro1: payload.Contratos[0].Titular.Endereco.Bairro,
        bairro2: payload.Contratos[0].Titular.EnderecoCorrespondencia.Bairro,
        bairro3: payload.Contratos[0].Titular.Contato.Endereco.Bairro,
        get field() { return this.bairro1 || this.bairro2 || this.bairro3 },
        catch: {
            status: 'error',
            message: 'Informe o bairro'
        }
    }

    if (!titularBairro.field) return titularBairro.catch

    // Valida se pelo menos 1 município foi informado

    const titularCidade = {
        cidade1: payload.Contratos[0].Titular.Endereco.Cidade,
        cidade2: payload.Contratos[0].Titular.EnderecoCorrespondencia.Cidade,
        cidade3: payload.Contratos[0].Titular.Contato.Endereco.Cidade,
        get field() { return this.cidade1 || this.cidade2 || this.cidade3 },
        catch: {
            status: 'error',
            message: 'Informe o Município'
        }
    }

    if (!titularCidade.field) return titularCidade.catch

    // Valida se o CPF do dependente foi informado

    const dependenteCpf = {
        field: payload.Contratos[0].Dependentes[0].Dependente.Cpf,
        catch: {
            status: 'error',
            message: 'CPF do Dependente não informado'
        }
    }

    if (!dependenteCpf.field) return dependenteCpf.catch

    // Valida se pelo menos 1 contato do titular foi informado

    const titularContato = {
        contato1: payload.Contratos[0].Titular.Contato.TelefoneResidencial,
        contato2: payload.Contratos[0].Titular.Contato.TelefoneCelular,
        contato3: payload.Contratos[0].Titular.Contato.Telefone,
        get field() { return this.contato1 || this.contato2 || this.contato3 },
        catch: {
            status: 'error',
            message: 'Nenhum contato foi informado'
        }
    }

    if (!titularContato.field) return titularContato.catch

    // Valida se pelo menos uma cidade da empresa foi informado

    const empresaCidade = {
        cidade1: payload.Empresa.Endereco.Endereco.Cidade,
        cidade2: payload.Empresa.EnderecoCorrespondencia.Endereco.Cidade,
        get field() { return this.cidade1 || this.cidade2 },
        catch: {
            status: 'error',
            message: 'Informe o Município'
        }
    }

    if (!empresaCidade.field) return empresaCidade.catch

    // Valida se o nome do titular foi informado

    const titularNome = {
        field: payload.Contratos[0].Titular.Nome,
        catch: {
            status: 'error',
            message: 'Nome Contratante não informado.'
        }
    }

    if (!titularNome.field) return titularNome.catch

    // Valida se a data de nascimento do titular foi informado

    const titularDataNascimento = {
        field: payload.Contratos[0].Titular.DataNascimento,
        catch: {
            status: 'error',
            message: 'Nome Contratante não informado.'
        }
    }

    if (!titularDataNascimento.field) return titularDataNascimento.catch

    // Valida se o nome da mãe do titular foi informado

    const titularNomeMae = {
        field: payload.Contratos[0].Titular.NomeMae,
        catch: {
            status: 'error',
            message: 'Nome Mãe Titular não informado'
        }
    }

    if (!titularNomeMae.field) return titularNomeMae.catch

    // Valida se pelo menos 1 plano foi informado

    const contratoPlanosCodigoPlano = {
        plano1: payload.Contratos[0].PlanoContratadoSaude.CodigoPlano,
        plano2: payload.Contratos[0].PlanoContratadoDental.CodigoPlano,
        get field() { return this.plano1 || this.plano2 },
        catch: {
            status: 'error',
            message: 'Informe o plano'
        }
    }

    if (!contratoPlanosCodigoPlano.field) return contratoPlanosCodigoPlano.catch

    const contratoPlanosCodigoPrc = {
        plano1: payload.Contratos[0].PlanoContratadoSaude.CodigoPrc,
        plano2: payload.Contratos[0].PlanoContratadoDental.CodigoPrc,
        get field() { return this.plano1 || this.plano2 },
        catch: {
            status: 'error',
            message: 'PRC não informado'
        }
    }

    if (!contratoPlanosCodigoPrc.field) return contratoPlanosCodigoPrc.catch

    // Valida se o corretor foi informado

    const dadosComissionadoCpfCorretor = {
        field: payload.DadosComissionado.CpfCorretor,
        catch: {
            status: 'error',
            message: 'Corretor não informado'
        }
    }

    if (!dadosComissionadoCpfCorretor.field) return dadosComissionadoCpfCorretor.catch

    // Valida se os totalizadores foram informados

    const totalizadorCobranca = {
        taxaAdesao: payload.TotalizadorCobranca.ValorTaxaAdesao,
        mensalidadeSaude: payload.TotalizadorCobranca.ValorTotalMensalidadeSaude,
        mensalidadeDental: payload.TotalizadorCobranca.ValorTotalMensalidadeDental,
        totalAditivos: payload.TotalizadorCobranca.ValorTotalAditivos,
        totalProposta: payload.TotalizadorCobranca.ValorTotalProposta,
        totalDescontos: payload.TotalizadorCobranca.ValorTotalDescontos,
        get field() {
            return this.taxaAdesao && this.mensalidadeSaude && this.mensalidadeDental && this.totalAditivos && this.totalProposta && this.totalDescontos
        },
        catch: {
            status: 'error',
            message: 'Informe o Valor Total'
        }
    }

    if (!totalizadorCobranca.field) return totalizadorCobranca.catch

    // Valida se o valor cobrado foi informado

    const titularValorCobrado = {
        valor1: payload.Contratos[0].Titular.ValorCobrado.ValorSaude.Valor,
        valor2: payload.Contratos[0].Titular.ValorCobrado.ValorSaude.Valor,
        get field() {
            return this.valor1 && this.valor2
        },
        catch: {
            status: 'error',
            message: 'Informe o Valor Total'
        }
    }

    if (!titularValorCobrado.field) return titularValorCobrado.catch

    // Valida se o estado civil do titular foi informado

    const titularEstadoCivil = {
        field: payload.Contratos[0].Titular.EstadoCivil,
        catch: {
            status: 'error',
            message: 'Informe o Estado Civil do titular'
        }
    }

    if (!titularEstadoCivil.field) return titularEstadoCivil.catch

    // Valida se o sexo do titular foi informado

    const titularSexo = {
        field: payload.Contratos[0].Titular.Sexo,
        catch: {
            status: 'error',
            message: 'Informe o Sexo do Beneficiário'
        }
    }

    if (!titularSexo.field) return titularSexo.catch

    // Valida se o sexo do dependente foi informado

    const dependenteSexo = {
        field: payload.Contratos[0].Dependentes[0].Dependente.Sexo,
        catch: {
            status: 'error',
            message: 'Informe o Sexo do Dependente'
        }
    }

    if (!dependenteSexo.field) return dependenteSexo.catch

    const dependenteNomeMae = {
        field: payload.Contratos[0].Dependentes[0].Dependente.NomeMae,
        catch: {
            status: 'error',
            message: 'Nome da mãe do dependente/agregado não informado'
        }
    }

    if (!dependenteNomeMae.field) return dependenteNomeMae.catch

    // Valida se o estado civil do dependente foi informado

    const dependenteEstadoCivil = {
        field: payload.Contratos[0].Dependentes[0].Dependente.EstadoCivil,
        catch: {
            status: 'error',
            message: 'Informe o Estado Civil do dependente'
        }
    }

    if (!dependenteEstadoCivil.field) return dependenteEstadoCivil.catch

    const responsavelEstadoCivil = {
        field: payload.Responsavel.EstadoCivil,
        catch: {
            status: 'error',
            message: 'Informe o Estado Civil do responsável'
        }
    }

    if (!responsavelEstadoCivil.field) return responsavelEstadoCivil.catch

    return 'sucess'
}

console.log(validation(file))

