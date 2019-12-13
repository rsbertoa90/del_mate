<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddInfoFieldsToConfigs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('configs', function (Blueprint $table) {
            //
            $table->string('wha')->nullable();
            $table->string('whaurl')->nullable();
            $table->string('ship1')->nullable();
            $table->string('ship2')->nullable();
            $table->string('pay1')->nullable();
            $table->string('pay2')->nullable();
            $table->string('at1')->nullable();
            $table->string('at2')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('configs', function (Blueprint $table) {
            //
        });
    }
}
