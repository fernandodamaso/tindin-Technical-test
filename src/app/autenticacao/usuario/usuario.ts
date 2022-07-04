export interface Usuario {
  // Usando o ? porque é opcional, não tem como garantir que o backend vai enviar o que esta combinado.
  iat?: number;
  user_id?: string;
}
