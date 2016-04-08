using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Repository;
using Phonechai.RequestModel;
using Phonechai.Service;
using Phonechai.ViewModel;

namespace Phonechai.WebApp.Controllers
{
    [Authorize]
    public class PhoneQueryController: ApiController
    {
        PhoneService service;

        public PhoneQueryController()
        {
            service = new PhoneService(new PhoneRepository(new BusinessDbContext()));
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

        public IHttpActionResult Post(PhoneRequestModel request)
        {
            var models = service.Search(request);
            return Ok(models);
        }
    }
}
