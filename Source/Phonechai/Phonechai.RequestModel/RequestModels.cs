using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using Phonechai.Model;

namespace Phonechai.RequestModel
{
    public class PhoneRequestModel : RequestModel<Phone>
    {
        public int Price { get; set; }

        public PhoneRequestModel(string keyword, string orderBy, string isAscending) : base(keyword, orderBy, isAscending)
        {
        }



        protected override Expression<Func<Phone, bool>> GetExpression()
        {
            if (!string.IsNullOrWhiteSpace(Keyword))
            {
                ExpressionObj = x => x.Name.ToLower().Contains(Keyword);
            }
            if (Price > 0)
            {
                ExpressionObj = ExpressionObj.And(x => x.Price < Price);
            }

            return ExpressionObj;
        }
    }
}
