import { expect } from 'chai';
import logarReducer  from './loginReducer'
import { logar, logadoComSucesso, falhaAoLogar, deslogar, deslogadoComSucesso, falhaAoDesogar } from '../../actions/logarActions'

describe ('logarReducer', () => {
    it('deve retornar o estado inicial', () => {
        const estadoInicial = { loading: false,
                                logado: false,
                                usuario: null };

        expect(logarReducer(estadoInicial, {})).equal(estadoInicial);
    });

    it('deve mudar para true o estado inicial de loading quando logar', () => {
        const acao = logar();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.loading).equal(true);
    });

    it('deve mudar para true o estado inicial de logado quando logar com sucesso', () => {
        const acao = logadoComSucesso();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.logado).equal(true);
    });

    it('deve manter estado o de loding em false quando houver falha no login', () => {
        const acao = falhaAoLogar();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.loading).equal(false);
    });

    it('deve mudar para true o estado inicial de loading quando deslogar', () => {
        const acao = deslogar();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.loading).equal(true);
    });

    it('deve mudar para false o estado inicial de logado quando deslogar com sucesso', () => {
        const acao = deslogadoComSucesso();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.logado).equal(false);
    });

    it('deve manter estado o de loding em false quando houver falha ao deslogar', () => {
        const acao = falhaAoDesogar();
        const estadoLogado = logarReducer({}, acao);

        expect(estadoLogado.loading).equal(false);
    });
});
