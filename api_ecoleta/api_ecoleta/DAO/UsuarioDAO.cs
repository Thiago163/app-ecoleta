using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api_ecoleta.DTO;
using MySql.Data.MySqlClient;

namespace api_ecoleta.DAO
{
    public class UsuarioDAO
    {
        //Métodos SQL
        #region Método que Lista Usuarios do banco de dados
        public List<UsuarioDTO> ListarUsuarios()
        {
            //1 Passo - Abrir a conexao com o banco de dados
            var conexao = ConnectionFactory.GetConnection();
            conexao.Open();
            //2 Passo - Criar e Executar o comando sql
            string sql = @"SELECT * FROM tb_usuarios";
            MySqlCommand comando = new MySqlCommand(sql, conexao);
            MySqlDataReader reader = comando.ExecuteReader();
            //3 Passo - Criar uma Lista de Objetos do tipo List com dados do select
            List<UsuarioDTO> lista = new List<UsuarioDTO>();
            while (reader.Read())
            {
                UsuarioDTO obj = new UsuarioDTO();
                obj.Id = int.Parse(reader.GetInt32("id").ToString());
                obj.Nome = reader.GetString("nome");
                obj.Email = reader.GetString("email");
                lista.Add(obj);
            }
            return lista;
        }
        #endregion

        #region Método que cadastra um usuario

        public void Cadastrar(UsuarioDTO obj)

        {
            //1 Passo - Abrir a conexao com o banco de dados
            var conexao = ConnectionFactory.GetConnection();
            conexao.Open();
            //2 Passo - Criar e Executar o comando sql
            string sql = @"INSERT INTO TB_USUARIOS (nome,email,senha) values (@nome, @email, @senha)";
            MySqlCommand comando = new MySqlCommand(sql, conexao);
            comando.Parameters.AddWithValue("@nome", obj.Nome);
            comando.Parameters.AddWithValue("@email", obj.Email);
            comando.Parameters.AddWithValue("@senha", obj.Senha);
            comando.ExecuteNonQuery();
            conexao.Close();

        }
        #endregion

    }
}
