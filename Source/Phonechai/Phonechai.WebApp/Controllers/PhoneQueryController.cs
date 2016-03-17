using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Service;

namespace Phonechai.WebApp.Controllers
{
    public class PhoneQueryController : BaseController
    {
        public IHttpActionResult Get()
        {
            PhoneService service=new PhoneService(Db);
            var viewModels = service.GetAll();
            return Ok(viewModels);
        }
    }
}
