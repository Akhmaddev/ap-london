<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\MenyuSearch $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="menyu-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
        'options' => [
            'data-pjax' => 1
        ],
    ]); ?>

    <?= $form->field($model, 'id') ?>

    <?= $form->field($model, 'bigtext') ?>

    <?= $form->field($model, 'tugma') ?>

    <?= $form->field($model, 'rasm') ?>

    <?= $form->field($model, 'sarlavha') ?>

    <?php // echo $form->field($model, 'narx') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-outline-secondary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
