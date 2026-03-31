<?php

namespace common\models;

use Yii;

/**
 * This is the model class for table "navbar".
 *
 * @property int $id
 * @property string $title
 * @property string $link
 */
class Navbar extends \yii\db\ActiveRecord
{


    /**
     * {@inheritdoc}
     */
    public static function tableName()
    {
        return 'navbar';
    }

    /**
     * {@inheritdoc}
     */
    public function rules()
    {
        return [
            [['title', 'link'], 'required'],
            [['title'], 'string', 'max' => 120],
            [['link'], 'string', 'max' => 130],
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function attributeLabels()
    {
        return [
            'id' => 'ID',
            'title' => 'Title',
            'link' => 'Link',
        ];
    }

    /**
     * {@inheritdoc}
     * @return NavbarQuery the active query used by this AR class.
     */
    public static function find()
    {
        return new NavbarQuery(get_called_class());
    }

}
