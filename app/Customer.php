<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $table = 'customers';
    protected $fillable = ['name','age','email','skills','status'];
    protected $appends = ['jsonSkills'];

    public function getJsonSkillsAttribute()
{
    return json_decode($this->getAttribute('skills'));
}
}
