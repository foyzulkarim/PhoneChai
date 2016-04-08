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
    public class PhoneController : BaseCommandController<Phone>
    {
        public PhoneController() : base(new PhoneService(new PhoneRepository(new BusinessDbContext())))
        {

        }
    }
}
