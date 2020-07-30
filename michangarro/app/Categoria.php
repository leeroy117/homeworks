<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class categoria extends Model
{
    //
    public $timestamps = false;
    protected $primaryKey = 'id_categoria';
    protected $fillable = ['nombre'];
}
