// Category adlarına uyğun icon mapping
export const categoryIconMap: Record<string, string> = {
  // Dondurulmuş məhsullar
  'dondurulmuş_məhsullar': '/icons/frozen.svg',
  'icecream': '/icons/icecream.svg',
  'frozen_foods': '/icons/frozen.svg',
  
  // Ət və ət məhsulları
  'dəniz_məhsulları': '/icons/seafood.svg',
  'seafood': '/icons/seafood.svg',
  'meat_products': '/icons/meat.svg',
  'gastronome': '/icons/gastronome.svg',
  'chicken_products': '/icons/chicken.svg',
  
  // İçkilər
  'alcoholic_drinks': '/icons/alcoholic.png',
  'non_alhocolic_drinks': '/icons/non_alcoholic.png',
  'energy_drinks': '/icons/energy.svg',
  'hot_drinks': '/icons/hot_drinks.svg',
  'spirtli_i̇çkilər': '/icons/alcoholic.png',
  'spirtsiz_i̇çkilər': '/icons/non_alcoholic.png',
  'çay_və_qəhvə': '/icons/hot_drinks.svg',
  
  // Konserv və hazır yemək
  'prepared_food': '/icons/prepared_food.svg',
  'canned_goods': '/icons/canned.svg',
  'breakfast_meal': '/icons/breakfast.svg',
  'hazır_qidalar': '/icons/prepared_food.svg',
  'konservləşdirilmiş_məhsulları': '/icons/canned.svg',
  'səhər_yeməyi': '/icons/breakfast.svg',
  'hazır_suplar': '/icons/steaming-bowl.svg',
  'bulyonlar': '/icons/steaming-bowl.svg',
  
  // Meyvə və tərəvəz
  'fruit_vegetable': '/icons/fruit_vegetable.svg',
  'dried_fruit': '/icons/dried_fruit.svg',
  'meyvə_və_tərəvəz': '/icons/fruit_vegetable.svg',
  'qurudulmuş_meyvələr': '/icons/dried_fruit.svg',
  
  // Təmizlik və gigiyena
  'hygiene_products': '/icons/hygiene.svg',
  'self_care': '/icons/self_care.svg',
  'təmizlik_və_məişət_kimyası': '/icons/hygiene.svg',
  'məi̇şət_ki̇mi̇yasi_🧼': '/icons/hygiene.svg',
  'şəxsi_baxım_və_gigiyena': '/icons/self_care.svg',
  'ümumi_hamam_məhsulları': '/icons/hygiene.svg',
  
  // Un və un məhsulları
  'bread': '/icons/bread.svg',
  'sweets': '/icons/sweets.svg',
  'flour_products': '/icons/flour.svg',
  'çörək_və_un_məmulatları': '/icons/bread.svg',
  'şirniyyat_və_qənnadı': '/icons/sweets.svg',
  'şəkər_və_un_məhsulları': '/icons/flour.svg',
  'şəkər_tozu_və_qənd': '/icons/sugar.svg',
  
  // Digər
  'milk_products': '/icons/milk.svg',
  'süd_məhsulları': '/icons/milk.svg',
  'cereal_and_grain_products': '/icons/cereal.svg',
  'taxıl_və_dənli_məhsullar': '/icons/cereal.svg',
  'makaron,_düyü_və_taxıl': '/icons/cereal.svg',
  'oil_butter': '/icons/oil.svg',
  'yağlar': '/icons/oil.svg',
  'sugar_products': '/icons/sugar.svg',
  'pet_foods': '/icons/pet_food.svg',
  'ev_heyvanları': '/icons/pet_food.svg',
  'kid_products': '/icons/kid.svg',
  'uşaq_məhsulları': '/icons/kid.svg',
  'dietary_food': '/icons/dietary.svg',
  'sağlam_və_dietik_qida': '/icons/dietary.svg',
  'food_supplements': '/icons/supplements.svg',
  'qi̇da_əlavələri̇': '/icons/supplements.svg',
  'snack': '/icons/snack.svg',
  'qəlyanaltılar': '/icons/snack.svg',
  'tumlar_və_çipslər': '/icons/snack.svg',
  'sushi_products': '/icons/sushi.svg',
  'suşi': '/icons/sushi.svg',
  'tobacco': '/icons/tobacco.svg',
  'tütün_və_elektron_siqaret': '/icons/tobacco.svg',
  'small_sale_commodity': '/icons/small_sale.svg',
  'xırda_ticarət_malları': '/icons/small_sale.svg',
  'sous_və_ədviyyat': '/icons/sauce.svg',
  'mürəbbə_və_cemlər': '/icons/honey.svg',
  'yumurta': '/icons/chicken.svg',
  'təzə_ət_və_toyuq_məhsulları': '/icons/meat.svg',
  
  // Əlavə category-lər
  '1001_xırdavat': '/icons/small_sale.svg',
  'avtomobil_üçün': '/icons/small_sale.svg',
  'açıq_hava_və_kempinq_üçün': '/icons/small_sale.svg',
  'ağız_təravətləndiriciləri': '/icons/self_care.svg',
  'batareya': '/icons/small_sale.svg',
  'bişirmə_məhsulları': '/icons/prepared_food.svg',
  'delikates_məhsulları': '/icons/gastronome.svg',
  'elektronika': '/icons/small_sale.svg',
  'kanselyariya': '/icons/small_sale.svg',
  'kənd_məhsullari': '/icons/fruit_vegetable.svg',
  'kəşf_edin': '/icons/small_sale.svg',
  'maska_və_tekstil': '/icons/hygiene.svg',
  'maşın_üçün_aksesuarlar': '/icons/small_sale.svg',
  'oyuncaqlar': '/icons/kid.svg',
  'qastronom': '/icons/gastronome.svg',
  'saqqiz': '/icons/snack.svg',
  'saqqız': '/icons/snack.svg',
  'turşu_məhsulları': '/icons/canned.svg',
  'təkliflər': '/icons/percentage-filled.svg',
  'xoşbəxt_cümə_endirimləri': '/icons/percentage-filled.svg',
  'xırdavat_ləvazimatları': '/icons/small_sale.svg',
  'xırdavat_və_kiçik_ev_əşyaları': '/icons/small_sale.svg',
  'yeni_i̇l': '/icons/small_sale.svg',
  'ən_çox_sifariş_verilən': '/icons/small_sale.svg',
  
  // Default icon
  'default': '/icons/small_sale.svg',
};

export function getCategoryIcon(_categoryName: string): string {
  return '/icons/percentage-filled.svg';
}

