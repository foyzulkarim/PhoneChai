using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Service;
using Phonechai.ViewModel;

namespace Phonechai.WebApp.Controllers
{
    public class PhoneQueryController : ApiController
    {
        public IHttpActionResult Get()
        {
           PhoneService service=new PhoneService(new BusinessDbContext());
            List<PhoneViewModel> models = service.GetAll();

            return Ok(models);

        }
    }
}
