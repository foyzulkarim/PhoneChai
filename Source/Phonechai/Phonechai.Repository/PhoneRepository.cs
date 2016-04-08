using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.ViewModel;

namespace Phonechai.Repository
{
    public class PhoneRepository: BaseRepository<Phone>
    {
        public PhoneRepository(BusinessDbContext db) : base(db)
        {
        }

        public IQueryable<Phone> GetAll()
        {
            return Db.Phones.AsQueryable();
        }      

        public bool Exists(string id)
        {
            return Db.Phones.Any(x => x.Id == id);
        }

        public PhoneViewModel GetDetail(string id)
        {
            Phone phone = Db.Phones.Find(id);
            PhoneViewModel viewModel = new PhoneViewModel(phone);
            return viewModel;
        }

        public string Update(Phone phone)
        {
            Db.Entry(phone).State = EntityState.Modified;
            Db.SaveChanges();
            return phone.Id;
        }
    }
}
