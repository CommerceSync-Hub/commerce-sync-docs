# Teszáry Péter - Tesztelési napló

## 2024-03-19

Hibanapló első bejegyzés.

<!-- ![alt text](<../.vitepress/dist/assets/img/Pasted image 20240319054723.png>)  -->

![alt text](<../img/Pasted image 20240319054723.png>)

A login oldalon a PasswordBox nem kapja meg ugyan azokat a beállításokat mint a többi mező. 

## 2024-03-24

A mai napon a dokumentációs oldalon dolgoztam. És végre sikerül a deployment a Github Pages-re. 
Szerettem volna a képeket hozzáadni a dokumentációhoz ahol csak lehet. Ezért létrehoztam egy img mappát a \commerce-sync-docs\docs\.vitepress\dist\assets mappában. Ide helyeztem a képeket, mert azt láttam, hogy a build után ide kerülnek a képek és minden egyéb fájl ami az oldalhoz szükséges. A probléma akkor bújt a felszínre, amikor buildeltem az oldalt. Sehogy sem akarta megtalálni a képeket. Viszont nem szerettem volna ha a képek a gyökér könyvtárban maradnak, mert az még sem esztétikus. Viszont állandóan hibára futottam:

```
  vitepress v1.0.0-rc.42

✖ building client + server bundles...
build error:
RollupError: Could not resolve "./.vitepress/dist/assets/img/woosync-auth.png" from "docs/installalas.md"
file: C:/Users/peter/Documents/GitHub/commerce-sync-docs/docs/installalas.md
    at error (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/parseAst.js:337:30)
    at ModuleLoader.handleInvalidResolvedId (file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18059:24)
    at file:///C:/Users/peter/Documents/GitHub/commerce-sync-docs/node_modules/rollup/dist/es/shared/node-entry.js:18019:26
PS C:\Users\peter\Documents\GitHub\commerce-sync-docs> 

```

De jónéhány tesztelés után megtaláltam a megoldást. A gyökér mappában kell elhelyeznem az img mappát és abba a fájlokat. Ezek után már megtalálta a fájlokat, sikeres volt a build és sikeres a deployment is.

## 2024-03-25

A mai hiba a dokumentációs oldalon volt. Próbáltam megjeleníteni a logónkat a kezdőlapon, de sehogy sem sikerült. :dev státuszban rendben megjelent minden, de build után, preview-al már nem működik. Akárhogy probálkozom. A többi képi eleme rendben látszik, de a logo nem. 404 hibát kapok vissza a konzolban.

## 2024-03-26

A mai napon próbálom a bővítményben módosítani a kódot, hogy a genereált api kulcs a megfelelő helyen jelenjen meg. 
A korábbi kód az options táblába mentette azt, de ez így nem megfelelő. 

A korábbi kód, amely nem megfelelő helyre mentette az API kulcsot:

```
    function generate_api_key_callback()
  {
    // Ellenőrizzük, hogy van-e már mentett API kulcs
    $existing_key = get_option('woosync_api_key');
    
    if (!$existing_key) {
        // Ha nincs tárolt kulcs, akkor generáljunk egy újat
        $api_key = wp_generate_password(32, false);

        // Save the API key in the database
        update_option('woosync_api_key', $api_key);
    } else {
        // Ha már van tárolt kulcs, használjuk azt
        $api_key = $existing_key;
    }
```

A módosított kód:

```
function generate_api_key_callback()
  {
    global $wpdb;
    $table_name = $wpdb->prefix . 'woosync_api_keys';

    // Ellenőrizzük, hogy van-e már mentett API kulcs
    $existing_key = $wpdb->get_var("SELECT api_key FROM $table_name");

    if (!$existing_key) {
        // Ha nincs tárolt kulcs, akkor generáljunk egy újat
        $api_key = wp_generate_password(32, false);

        // Mentsük el az új API kulcsot az adatbázisba
        $wpdb->insert(
            $table_name,
            array(
                'api_key' => $api_key
            )
        );
    } else {
        // Ha már van tárolt kulcs, használjuk azt
        $api_key = $existing_key;
    }
```

Most már csak azt kell javítanom, hogy megjelenjen a settings oldalon is, ám lehet, hogy később ezt az opciót elhagyom. Felesleges.

## 2024-04-02

A mai napon miután átszerveztem mindent, hogy az applikácó ezentúl MySQL-ben tárolja az adatokat, némi problémába futottam. Ha nem lett kitöltve a "tag", "GalleryUrls" és "ImageUrl" mező, akkor null értékre hoibát dobott a program. Ezért nem tudtam visszakérni sem az adatokat a SearchProductView oldalon sem. Tehát meg kellett oldanom, hogy null értéket is fel lehessen venni a termékek hozzáadásakor. 

Ezt az alábbi módon, a táblát létrehozásánál tudtam megadni. Abban az esetben - ahogyan én is jártam - ha volt már tábla, ki kellett törölnöm, mert a létrehozáskor adom meg neki a default értéket:


```
// Táblák létrehozása
            string createProductsTableQuery = @"
                CREATE TABLE IF NOT EXISTS Products (
                    ProductId INT AUTO_INCREMENT PRIMARY KEY,
                    ProductName VARCHAR(255),
                    Price DECIMAL(10,2),
                    SalesPrice DECIMAL(10,2),
                    Category VARCHAR(255),
                    StockQuantity INT,
                    SKU VARCHAR(255),
                    Tags VARCHAR(255) DEFAULT '',
                    ShortDescription TEXT,
                    LongDescription TEXT,
                    ImageUrl VARCHAR(255) DEFAULT '',
                    GalleryUrls TEXT DEFAULT ''
                )";

```

Továbbá a Userek hozzáadásakor is problémába futottam, mert elsőként nem akarta engedélyezni az adatbázisba beírást. Aztán rájöttem, hogy azért mert nem jól adom meg az adatbázis hozzáférést. 

## 2024-04-16

A Desktop applikációnál a tesztelés során észleltem, hogy nem menti el a módosításokat. Pontosabban amikor a SearchProductView-ban módosítok egy terméket, akkor azt csak addig tárolja, amíg el nem navigálok egy másik menüpontra. Tehát ezt a hibát kell javítanom.

A probléma ott van, hogy még mindig SQLite adatbázisba menti az adatokat, amit korábban használtam:


 ```
private void SaveChangesButton_Click(object sender, RoutedEventArgs e)
{
    // Check that the selected product is not empty
    if (SelectedProduct != null)
    {
        // Update the product details with the data entered in the fields
        SelectedProduct.ProductName = txtProductName.Text;
        SelectedProduct.Price = decimal.Parse(txtPrice.Text);
        SelectedProduct.SalesPrice = decimal.Parse(txtSalesPrice.Text);
        SelectedProduct.Category = cmbCategory.Text;
        SelectedProduct.StockQuantity = int.Parse(txtStockQuantity.Text);
        SelectedProduct.SKU = txtSKU.Text;
        // Update additional fields with the corresponding Product properties

        // Update in the database
        using (SQLiteConnection connection = new SQLiteConnection(App.DatabasePath))
        {
            connection.Update(SelectedProduct);
        }

        // Close window
        Close();
    }
}

 ```

 Tehát ezt kell most megoldanom... Ezt módosítottam is:

 ```
 private void SaveChangesButton_Click(object sender, RoutedEventArgs e)
{
    if (SelectedProduct != null)
    {
        SelectedProduct.ProductName = txtProductName.Text;
        SelectedProduct.Price = decimal.Parse(txtPrice.Text);
        SelectedProduct.SalesPrice = decimal.Parse(txtSalesPrice.Text);
        SelectedProduct.Category = cmbCategory.Text;
        SelectedProduct.StockQuantity = int.Parse(txtStockQuantity.Text);
        SelectedProduct.SKU = txtSKU.Text;
        SelectedProduct.ShortDescription = txtShortDescription.Text;
        SelectedProduct.LongDescription = txtLongDescription.Text;
        

        var dataAccess = new DataAccess(App.Server, App.Database, App.Username, App.Password);
        dataAccess.InsertProduct(SelectedProduct); // Ez még csak insert

        Close();
    }
}
 ```

 Viszont most egy olyan probléma lépett fel, hogy nem update-eli hanem csak insert-eli új termékként a módosított termékeket.
 Tehát a DataAccess.cs fájlban, létre kell hoznom egy UpdateProduct metódust is. 

```
 public void UpdateProduct(Product product)
{
    using (var connection = new MySqlConnection(connectionString))
    {
        string query = "UPDATE Products SET ProductName = @ProductName, Price = @Price, SalesPrice = @SalesPrice, Category = @Category, StockQuantity = @StockQuantity, SKU = @SKU, Tags = @Tags, ShortDescription = @ShortDescription, LongDescription = @LongDescription, ImageUrl = @ImageUrl, GalleryUrls = @GalleryUrls WHERE ProductId = @ProductId";

        using (var command = new MySqlCommand(query, connection))
        {
            command.Parameters.AddWithValue("@ProductName", product.ProductName);
            command.Parameters.AddWithValue("@Price", product.Price);
            command.Parameters.AddWithValue("@SalesPrice", product.SalesPrice);
            command.Parameters.AddWithValue("@Category", product.Category);
            command.Parameters.AddWithValue("@StockQuantity", product.StockQuantity);
            command.Parameters.AddWithValue("@SKU", product.SKU);
            command.Parameters.AddWithValue("@Tags", product.Tags);
            command.Parameters.AddWithValue("@ShortDescription", product.ShortDescription);
            command.Parameters.AddWithValue("@LongDescription", product.LongDescription);
            command.Parameters.AddWithValue("@ImageUrl", product.ImageUrl);
            command.Parameters.AddWithValue("@GalleryUrls", product.GalleryUrls);
            command.Parameters.AddWithValue("@ProductId", product.ProductId);

            connection.Open();
            command.ExecuteNonQuery();
        }
    }
}

```

A tesztelés során továbbá észrevettem, hogy az EditUserWindow esetén, a gomb felirat az, hogy "Add new User". Miközben itt módosítunk, tehát Update-elünk. Ezt módosítanom kell.

```
 <Button
  Grid.Row="10"
  Grid.Column="0"
  Margin="5"
  HorizontalAlignment="Left"
  Content="Add New User" 
  Click="Edit_User_Button_Click" BorderThickness="5,0,0,0"/>
  ```
Az alábbiak szerint:

 ```
<Button
 Grid.Row="10"
 Grid.Column="0"
 Margin="5"
 HorizontalAlignment="Left"
 Content="Update User" 
 Click="Edit_User_Button_Click" BorderThickness="5,0,0,0"/>
  ```