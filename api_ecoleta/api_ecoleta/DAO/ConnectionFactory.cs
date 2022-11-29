using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace api_ecoleta.DAO
{
    public class ConnectionFactory
    {
        public static MySqlConnection GetConnection()
        {
            string connectionString = "Server=localhost;Database=bdecoleta;Uid=root;Pwd=root;";
            return new MySqlConnection(connectionString);
        }
    }
}
