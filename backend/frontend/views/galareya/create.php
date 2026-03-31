<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Galareya $model */

$this->title = 'Create Galareya';
$this->params['breadcrumbs'][] = ['label' => 'Galareyas', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="galareya-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
