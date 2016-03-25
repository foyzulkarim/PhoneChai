using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Phonechai.WebApp.Controllers
{
    [Authorize(Roles = "Admin",Users = "foyzulkarim@gmail.com")]
    public class PrivateResourcesController : ApiController
    {
        public IHttpActionResult Get()
        {
            return Ok(DateTime.Now);
        }
    }
}
