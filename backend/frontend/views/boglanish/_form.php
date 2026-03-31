<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Boglanish $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="boglanish-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'appname')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'malumoti')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'appimg')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
