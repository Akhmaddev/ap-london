<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Qism $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="qism-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'ism')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'malumot')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'sana')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
