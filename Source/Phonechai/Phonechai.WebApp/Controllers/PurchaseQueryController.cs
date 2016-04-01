using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Phonechai.WebApp.Controllers
{
    [Authorize(Roles = "Owner")]
    public class PurchaseQueryController : ApiController
    {
        public IHttpActionResult Get()
        {
            string username = ""+DateTime.Now+" ";
            username += User.Identity.Name;
            return Ok(username);

        }
    }
}
