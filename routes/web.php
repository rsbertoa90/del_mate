<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/sitemap.xml','SitemapController@sitemap');


Route::get('/descargar-catalogo-grande','PdfController@redirectCatalogoRaw');
Route::get('/descargar-catalogo-digital','PdfController@redirectCatalogo');


/* Auth::routes(); */
Route::post('/login','Auth\LoginController@login');
Route::get('/logout','Auth\LoginController@logout');

Route::middleware('CheckAdmin')->prefix('/admin/')->group(function () {

   /*  Route::get('/slugify','CategoryController@slugifyAll'); */

  /*   Route::get('/failed-jobs','AdminController@failedJobs'); */
    
    Route::get('/lista-de-precios','PDFController@dispatchPricesListJob');
    Route::get('/prices-list-job','PDFController@dispatchPricesListJob');
    Route::get('/catalogo-job','PDFController@dispatchCatalogoJob');
    Route::get('/category-catalogo-job/{id}','PDFController@dispatchCategoryCatalogJob');
    Route::post('/replace-catalogo','PDFController@replaceCatalogo');

   /*  Route::get('/catalogo','PDFController@catalogo'); */
    
    Route::post('/categories/image','CategoryController@uploadImage');

   /*  Route::get('/','AdminController@admin'); */
    /* Route::get('/reporte','AdminController@report'); */

   /*  Route::get('/pedidos','OrderController@panel'); */

    Route::put('/product/update','ProductController@update');

    Route::post('/product','ProductController@save');
    Route::post('/product/deleteImage','ProductController@deleteImage');
    Route::put('/product/setFirstImage','ProductController@setFirstImage');
    Route::delete('/product/{id}','ProductController@delete');

    Route::post('/product/image', 'ProductController@uploadImage')->middleware('optimizeImages');

    Route::post('/category','CategoryController@save');
    Route::put('/category','CategoryController@update');
    Route::delete('/category/{id}','CategoryController@destroy');

    Route::post('/suplier','SuplierController@save');
    Route::put('/suplier','SuplierController@update');
     Route::delete('/suplier/{id}','SuplierController@destroy');

    Route::post('/cotizacion','OrderController@adminOrder');
    
    Route::get('/pdf/{order}', 'OrderController@toPDF');

    Route::put('/order','OrderController@update');

    Route::put('/config','ConfigController@update');

   /*  Route::get('/metadata','MetadataController@page'); */
    Route::put('/metadata','MetadataController@update');
    
    Route::put('/customtext','CustomTextController@update');


});


/* Route::get('/test','HomeController@test');
 */
Route::get('/pdf/{order}', 'OrderController@toPDF');


Route::get('/config','ConfigController@get');

Route::get('/getuser','UserController@get');

Route::get('/logout','HomeController@logout');

Route::post('/cotizer/send', 'OrderController@userOrder');

Route::get('/descargar-lista-de-precios','PdfController@downloadPricesList');



Route::get('/{any}','SinglePageController@index')->where('any', '.*');
/* 
Route::get('/', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');

Route::get('/home', 'HomeController@index')->name('home');




Route::get('/{slug}','CategoryController@categoryPage'); */