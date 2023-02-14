using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class addedimagelinkss : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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
                name: "Quantity",
                table: "Subscription");

            migrationBuilder.AlterColumn<bool>(
                name: "IsPremium",
                table: "Recipes",
                type: "bit",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.AddColumn<string>(
                name: "ImageLink",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageLink",
                table: "Category",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "28cdfc41-4e6f-4e6e-b013-293599ed0347", "2", "FreeUser", "FreeUser" },
                    { "7ab5d2ce-2b3f-48f9-a6e5-e42235649369", "3", "SubscribedUser", "SubscribedUser" },
                    { "ed739f06-21fb-4cf9-a549-e0a98a01309a", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "28cdfc41-4e6f-4e6e-b013-293599ed0347");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7ab5d2ce-2b3f-48f9-a6e5-e42235649369");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "ed739f06-21fb-4cf9-a549-e0a98a01309a");

            migrationBuilder.DropColumn(
                name: "ImageLink",
                table: "Recipes");

            migrationBuilder.DropColumn(
                name: "ImageLink",
                table: "Category");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "Subscription",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AlterColumn<string>(
                name: "IsPremium",
                table: "Recipes",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(bool),
                oldType: "bit");

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
    }
}
