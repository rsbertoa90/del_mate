<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/



Route::get('/user','AuthController@getUser');

Route::get('/logout','AuthController@logout');

Route::post('/login','AuthController@login');


Route::get('/failed-jobs','AdminController@getFailedJobs');

Route::get('/categories','CategoryController@getAll');
Route::get('/category/{id}','CategoryController@get');
Route::get('/products','ProductController@getAll');
Route::get('/productsnotpaused','CategoryController@getNotPaused');

Route::get('/categories/{category}','CategoryController@get');

Route::get('/supliers', 'SuplierController@getAll');

Route::get('/orders','OrderController@get');

Route::get('/metadata/{page}', 'MetadataController@get');

Route::get('/states','StateController@get');

Route::get('/meta','MetadataController@getAll');

Route::get('/city/{id}','StateController@getCity');

Route::get('/custom-text/{code}','CustomTextController@get');
Route::get('/custom-texts','CustomTextController@getAll');



/* ritasmates fabio */


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/* 
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
}); */
 Route::post('/regalos-empresariales','MailController@regalosEmpresariales');

Route::get('/failed-jobs','AdminController@getFailedJobs');

Route::get('/categories','CategoryController@getAll');
Route::get('/category/{id}','CategoryController@get');
Route::get('/products','ProductController@getAll');
Route::get('/productsnotpaused','CategoryController@getNotPaused');

Route::get('/categories/{category}','CategoryController@get');

Route::get('/supliers', 'SuplierController@getAll');


Route::get('/meta','MetadataController@getAll');

Route::get('/states','StateController@get');

Route::get('/city/{id}','StateController@getCity');

Route::get('/custom-text/{code}','CustomTextController@get');
Route::get('/custom-texts','CustomTextController@getAll');

Route::get('/slides','SlideController@get');

Route::get('/fileuris','FileuriController@get');

Route::get('/search-history','SearchHistoryController@get');



// COPIADO DE matesfabi



Route::get('/user','AuthController@getUser');

Route::get('/logout','AuthController@logout');

Route::post('/login','AuthController@login');


Route::get('/categories','CategoryController@getAll');
Route::get('/metadatas','MetadataController@getAll');


Route::get('/states','StateController@get');
Route::get('/city/{id}','StateController@getCity');

Route::get('/config','ConfigController@get');

Route::get('/search-history','SearchHistoryController@get');

Route::post('/searchHistory','SearchHistoryController@save');

Route::get('/productsNotPaused','CategoryController@productsNotPaused');


Route::post('/contacto','MailController@contacto');

Route::post('/cotizer/send','OrderController@create');

Route::post('/searchHistory','SearchHistoryController@save');

/* ADMIN */
Route::group(['middleware' => 'CheckAdmin'], function () {
    //

     Route::get('/orders','OrderController@get');
     Route::get('/canceled-orders','OrderController@getCanceledOrders');

    Route::post('/replace-catalogo','PdfController@replaceCatalogo');
    Route::post('/replace-catalogo-sin-precios','PdfController@replaceCatalogoSinPrecios');
    
    
    Route::get('/prices-list-job','PdfController@dispatchPricesListJob');
    Route::get('/catalogo-job','PdfController@dispatchCatalogoJob');
    Route::get('/category-catalogo-job/{id}','PDFController@dispatchCategoryCatalogJob');
    
    




    Route::get('/refresh-prices','PdfController@prices');
    Route::get('/failedjobs','AdminControllers@failedJobs');

    Route::get('/search-history','SearchHistoryController@get');
    
    Route::post('/suplier','SuplierController@create');

    Route::post('/category','CategoryController@create');
    Route::put('/category','CategoryController@update');

     Route::post('/category/image','CategoryController@uploadImage');


    Route::post('/product','ProductController@create');
    Route::put('/product','ProductController@update');
    Route::delete('/product/{id}','ProductController@destroy');
   
    Route::post('/product/image','ProductController@uploadImage');
   
    Route::delete('/product/image/{id}','ProductController@deleteImage');
   
    /* Route::put('/product/setFirstImage','ProductController@setFirstImage');
 */

   

    Route::put('/metadata','MetadataController@update');
   /*  Route::get('/busquedas','AdminController@searchHistory'); */
    
    /* Route::get('/','AdminController@cotizador'); */
   /*  Route::get('/cotizador','AdminController@cotizador'); */

    Route::put('/order','OrderController@update');
   /*  Route::get('/ordenes','AdminController@orders'); */
   

    Route::put('/config','ConfigController@update');

    Route::get('/download-image/{$id}','ProductController@downloadImage');

});
