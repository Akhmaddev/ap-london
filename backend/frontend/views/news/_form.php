<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\News $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="news-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'rasmii')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'nomii')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'yozuvi')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'tugmasi')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'sanasi')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
