using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class modifiedthesubscriptionmodel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "05d85dcd-e32c-48e3-bd51-c22a6f9ae7d0");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "177d63ff-4e20-4c87-8a86-1c2fe360235d");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "84c079b5-1384-4645-b0db-359cb96ffe94");

            migrationBuilder.AddColumn<int>(
                name: "Price",
                table: "Subscription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Subscription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "0075dcb0-e196-4e1b-a621-644f9e7a2589", "3", "SubscribedUser", "SubscribedUser" },
                    { "e96c6c42-3de9-4313-bf13-bdfa65151fcf", "2", "FreeUser", "FreeUser" },
                    { "ec2ffc24-13ac-4f55-9b56-aa6e0190059c", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "0075dcb0-e196-4e1b-a621-644f9e7a2589");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "e96c6c42-3de9-4313-bf13-bdfa65151fcf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ec2ffc24-13ac-4f55-9b56-aa6e0190059c");

            migrationBuilder.DropColumn(
                name: "Price",
                table: "Subscription");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "Subscription");

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    UserId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.UserId);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "05d85dcd-e32c-48e3-bd51-c22a6f9ae7d0", "1", "Admin", "Admin" },
                    { "177d63ff-4e20-4c87-8a86-1c2fe360235d", "3", "SubscribedUser", "SubscribedUser" },
                    { "84c079b5-1384-4645-b0db-359cb96ffe94", "2", "FreeUser", "FreeUser" }
                });
        }
    }
}
