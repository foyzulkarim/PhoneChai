using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Repository;
using Phonechai.Service;

namespace Phonechai.WebApp.Controllers.Command
{
    public class BrandCommandController : BaseCommandController<Brand>
    {
        public BrandCommandController(): base(new BrandService(new BrandRepository(new BusinessDbContext())))
        {
            
        }
    }
}
