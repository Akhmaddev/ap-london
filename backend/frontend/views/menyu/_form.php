<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Menyu $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="menyu-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'bigtext')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'tugma')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'rasm')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'sarlavha')->textInput(['maxlength' => true]) ?>

    <?= $form->field($model, 'narx')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
