using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.Repository;
using Phonechai.ViewModel;

namespace Phonechai.Service
{
    public class PhoneService : BaseService
    {
        PhoneRepository repository;

        public PhoneService(BusinessDbContext db) : base(db)
        {
            repository = new PhoneRepository(DbContext);
        }

        public List<PhoneViewModel> GetAll()
        {
            
            IQueryable<Phone> queryable = repository.GetAll();
            var phoneViewModels = queryable.ToList().Select(x => new PhoneViewModel(x)).ToList();
            return phoneViewModels;
        }

        public string Add(Phone phone)
        {
            bool exists = repository.Exists(phone.Id);
            if (exists)
            {
                return repository.Update(phone);
            }
            return repository.Add(phone);
        }

        public PhoneViewModel GetDetail(string id)
        {
            return repository.GetDetail(id);
        }
    }
}
