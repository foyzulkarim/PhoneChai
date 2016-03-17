using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;
using Phonechai.ViewModel;

namespace Phonechai.Repository
{
    public class PhoneRepository: BaseRepository
    {
        public PhoneRepository(BusinessDbContext db) : base(db)
        {
        }

        public IQueryable<Phone> GetAll()
        {
            return Db.Phones.AsQueryable();
        }

        public string Add(Phone phone)
        {
            Phone added = Db.Phones.Add(phone);
            Db.SaveChanges();
            return added.Id;
        }
    }
}
