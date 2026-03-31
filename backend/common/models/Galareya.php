<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "galareya".
 *
 * @property int $id
 * @property string $teg
 * @property string $malumotlar
 * @property string $tugmacha
 */
class Galareya extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'galareya';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['teg', 'malumotlar', 'tugmacha'], 'required'],
            [['malumotlar'], 'string'],
            [['teg'], 'string', 'max' => 90],
            [['tugmacha'], 'string', 'max' => 50],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'teg' => 'Teg',
            'malumotlar' => 'Malumotlar',
            'tugmacha' => 'Tugmacha',
        ];
    }

    /**
     * {@inheritdoc}
     * @return GalareyaQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new GalareyaQuery(get_called_class());
    }

}
