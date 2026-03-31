<?php

namespace common\models;

/**
 * This is the ActiveQuery class for [[Galareya]].
 *
 * @see Galareya
 */
class GalareyaQuery extends \yii\db\ActiveQuery
{
    /*public function active()
    {
        return $this->andWhere('[[status]]=1');
    }*/

    /**
     * {@inheritdoc}
     * @return Galareya[]|array
     */
    public function all($db = null)
    {
        return parent::all($db);
    }

    /**
     * {@inheritdoc}
     * @return Galareya|array|null
     */
    public function one($db = null)
    {
        return parent::one($db);
    }
}
