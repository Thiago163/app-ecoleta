using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_ecoleta.DTO
{
    public class UsuarioDTO
    {
        //Atributos e Getters e Setters
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}

