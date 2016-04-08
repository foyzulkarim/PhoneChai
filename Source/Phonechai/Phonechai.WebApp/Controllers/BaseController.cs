using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Phonechai.Model;
using Phonechai.Service;

namespace Phonechai.WebApp.Controllers
{
    public class BaseCommandController<T> : ApiController where T : Entity
    {      
        protected BaseService<T> service; 
        public BaseCommandController(BaseService<T> service)
        {
            this.service = service;
        }

        public IHttpActionResult Post(T entity)
        {            
            if (string.IsNullOrWhiteSpace(entity.Id))
            {
                entity.Id = Guid.NewGuid().ToString();
            }
            // this is a test
            var addedId = service.Add(entity);
            return Ok(entity.Id);
        }
    }
}
