<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "news".
 *
 * @property int $id
 * @property string $rasmii
 * @property string $nomii
 * @property string $yozuvi
 * @property string $tugmasi
 * @property string $sanasi
 */
class News extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'news';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['rasmii', 'nomii', 'yozuvi', 'tugmasi', 'sanasi'], 'required'],
            [['rasmii', 'yozuvi'], 'string'],
            [['nomii'], 'string', 'max' => 50],
            [['tugmasi'], 'string', 'max' => 90],
            [['sanasi'], 'string', 'max' => 80],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'rasmii' => 'Rasmii',
            'nomii' => 'Nomii',
            'yozuvi' => 'Yozuvi',
            'tugmasi' => 'Tugmasi',
            'sanasi' => 'Sanasi',
        ];
    }

    /**
     * {@inheritdoc}
     * @return NewsQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new NewsQuery(get_called_class());
    }

}
