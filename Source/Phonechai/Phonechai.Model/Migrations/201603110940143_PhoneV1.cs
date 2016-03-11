namespace Phonechai.Model.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class PhoneV1 : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Phones",
                c => new
                    {
                        Id = c.String(nullable: false, maxLength: 128),
                        Name = c.String(),
                        Brand = c.String(),
                        Cpu = c.String(),
                        Camera = c.String(),
                        Memory = c.String(),
                        Size = c.String(),
                        Resolution = c.String(),
                        Price = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Phones");
        }
    }
}
