using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_ecoleta.DAO;
using api_ecoleta.DTO;

namespace api_ecoleta.Controllers
{
    [Route("api/usuarios")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpGet]
        [Route("Listar")]
        public IActionResult Listar()
        {
            //Listando os usuarios do banco de dados
            UsuarioDAO dao = new UsuarioDAO();
            var listaDeUsuarios = dao.ListarUsuarios();
            return Ok(listaDeUsuarios);
        }

        [HttpPost]
        [Route("Cadastrar")]
        public IActionResult Cadastrar(UsuarioDTO obj)
        {
            if (obj == null)
            {
                return BadRequest("Falha ao Cadastrar");
            }
            else
            {
                UsuarioDAO dao = new UsuarioDAO();
                dao.Cadastrar(obj);
                return Ok("sucesso");
            }
        }
    }

}


