<?php

use yii\helpers\Html;

/** @var yii\web\View $this */
/** @var common\models\Qism $model */

$this->title = 'Create Qism';
$this->params['breadcrumbs'][] = ['label' => 'Qisms', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="qism-create">

    <h1><?= Html::encode($this->title) ?></h1>

    <?= $this->render('_form', [
        'model' => $model,
    ]) ?>

</div>
