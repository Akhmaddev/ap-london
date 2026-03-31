<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "topcenter".
 *
 * @property int $id
 * @property string $image
 * @property string $divtext
 * @property string $price
 */
class Topcenter extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'topcenter';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['image', 'divtext', 'price'], 'required'],
            [['image'], 'string'],
            [['divtext'], 'string', 'max' => 120],
            [['price'], 'string', 'max' => 100],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'image' => 'Image',
            'divtext' => 'Divtext',
            'price' => 'Price',
        ];
    }

    /**
     * {@inheritdoc}
     * @return TopcenterQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new TopcenterQuery(get_called_class());
    }

}
