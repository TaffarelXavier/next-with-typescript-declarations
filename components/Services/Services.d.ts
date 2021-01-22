// This namespace is merged with the API class and allows for consumers, and this file
// to have types which are nested away in their own sections.
declare namespace User {
  export interface IProfile {
    id: string;
    cargo: string;
    celular: string;
    email: string;
    nome: string;
  }

  export interface InfoResponse {
    width: number;
    height: number;
  }
}
