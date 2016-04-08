using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Repository;
using Phonechai.Service;

namespace Phonechai.WebApp.Controllers
{
    [Authorize(Roles = "SuperAdmin,Owner")]
    public class PhoneController : BaseController
    {
        public IHttpActionResult Post(Phone phone)
        {
            var service = new PhoneService(new PhoneRepository(new BusinessDbContext()));
            if (string.IsNullOrWhiteSpace(phone.Id))
            {
                phone.Id = Guid.NewGuid().ToString();
            }
            // this is a test
            var addedId =  service.Add(phone);
            return Ok(phone.Id);
        }

       

    }
}
