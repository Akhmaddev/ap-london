<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Menyu $model */

$this->title = 'Create Menyu';
$this->params['breadcrumbs'][] = ['label' => 'Menyus', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="menyu-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
