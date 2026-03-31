<?php
namespace backend\controllers;

use yii\rest\ActiveController;

class TopcenterController extends ActiveController
{
    public $modelClass = 'common\models\topcenter';

    public function behaviors()
{
    $behaviors = parent::behaviors();

    
    // add CORS filter
    $behaviors['corsFilter'] = [
        'class' => \yii\filters\Cors::class,
    ];
   

    return $behaviors;
}
}

