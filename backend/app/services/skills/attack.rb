module Skills
  class Attack < BaseSkill
    class << self
      def perform(caster: nil, target: nil)
        validate_arguments(caster, target)

        @skill ||= fetch_skill
        deal_damage(caster: caster, target: target)
      end
    end
  end
end
