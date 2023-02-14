using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace RecipobyAgilis.Migrations
{
    /// <inheritdoc />
    public partial class ingredientinrecipewithquantity : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "32c91f3f-e4e4-47f7-aa65-3ed1792d0f6e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b4c9554d-15c6-4aaa-9832-165952d6be1e");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "d0c13854-b341-4147-b059-52ff2326cde6");

            migrationBuilder.AddColumn<int>(
                name: "Quantity",
                table: "IngredientsInRecipes",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "QuantityType",
                table: "IngredientsInRecipes",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "007c6580-ec59-4f54-bc28-f1aa8378a26f", "2", "FreeUser", "FreeUser" },
                    { "272fa717-b07e-4610-ac33-ea648754c6dc", "3", "SubscribedUser", "SubscribedUser" },
                    { "5d2b6ea9-7837-4030-9356-1477c9ab5213", "1", "Admin", "Admin" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "007c6580-ec59-4f54-bc28-f1aa8378a26f");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "272fa717-b07e-4610-ac33-ea648754c6dc");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5d2b6ea9-7837-4030-9356-1477c9ab5213");

            migrationBuilder.DropColumn(
                name: "Quantity",
                table: "IngredientsInRecipes");

            migrationBuilder.DropColumn(
                name: "QuantityType",
                table: "IngredientsInRecipes");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "32c91f3f-e4e4-47f7-aa65-3ed1792d0f6e", "3", "SubscribedUser", "SubscribedUser" },
                    { "b4c9554d-15c6-4aaa-9832-165952d6be1e", "1", "Admin", "Admin" },
                    { "d0c13854-b341-4147-b059-52ff2326cde6", "2", "FreeUser", "FreeUser" }
                });
        }
    }
}
