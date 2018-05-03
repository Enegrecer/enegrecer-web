import { LOGADO_COM_SUCESSO, 
          DESLOGADO_COM_SUCESSO, 
          LOGAR, 
          DESLOGAR, 
          FALHA_AO_LOGAR, 
          FALHA_AO_DESLOGAR, 
          SINCRONIZAR_USUARIO } from "../../actions/logarActions";

const estadoInicial = { 
  loading: false,
  logado: false,
  usuario: null
};

export default function logarReducer(estado = estadoInicial, action) {
    switch (action.type) {
      case LOGAR:
      case DESLOGAR:
        return {
          ...estado,
          loading: true 
        }
      
      case LOGADO_COM_SUCESSO:
        return {
          ...estado,
          loading: false,
          logado: true
        }

      case FALHA_AO_LOGAR:
        return {
          ...estado,
          loading: false
        }

      case DESLOGADO_COM_SUCESSO:
        return {
          ...estado,
          loading: false,
          logado: false
        }  

      case FALHA_AO_DESLOGAR:
        return {
          ...estado,
          loading: false
        }
      
      case SINCRONIZAR_USUARIO:
        return {
          ...estado,
          logado: action.usuario != null,
          usuario: action.usuario
        }
  
      default:
        return estado;
    }
  }
  