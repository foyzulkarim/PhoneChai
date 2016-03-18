using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Service;
using Phonechai.ViewModel;

namespace Phonechai.WebApp.Controllers
{
    public class PhoneQueryController : BaseController
    {
        PhoneService service;

        public PhoneQueryController()
        {
            service = new PhoneService(Db);
        }

        public IHttpActionResult Get()
        {
            var viewModels = service.GetAll();
            return Ok(viewModels);
        }

        public IHttpActionResult Get(string id)
        {
            PhoneViewModel viewModel = service.GetDetail(id);
            return Ok(viewModel);
        }
    }
}
