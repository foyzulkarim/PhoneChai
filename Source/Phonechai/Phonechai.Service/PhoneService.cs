using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.Repository;
using Phonechai.RequestModel;
using Phonechai.ViewModel;

namespace Phonechai.Service
{
    public class PhoneService : BaseService<Phone>
    {
        PhoneRepository repository;

        public PhoneService(PhoneRepository repository) : base(repository)
        {
            this.repository = repository;
        }

        public List<PhoneViewModel> GetAll()
        {
            
            IQueryable<Phone> queryable = repository.GetAll();
            var phoneViewModels = queryable.ToList().Select(x => new PhoneViewModel(x)).ToList();
            return phoneViewModels;
        }       

        public PhoneViewModel GetDetail(string id)
        {
            return repository.GetDetail(id);
        }

        public List<PhoneViewModel> Search(PhoneRequestModel request)
        {
            var queryable = repository.GetAll();
            queryable = request.GetOrderedData(queryable);
            var list = request.SkipAndTake(queryable).ToList();
            var models = list.ConvertAll(x => new PhoneViewModel(x)).ToList();
            return models;
        }
    }
}
