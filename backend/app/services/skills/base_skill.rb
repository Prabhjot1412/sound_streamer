module Skills
  class BaseSkill
    class << self
      def perform(caster: nil, target: nil)
        raise 'skill not implemented'
      end

      private

      def fetch_skill
        Skill.find_by_name(self.to_s.sub('Skills::', ''))
      end

      def validate_arguments(caster, target)
        return if caster.is_a?(Character) && target.is_a?(Character)

        raise ArgumentError, "invalid type for caster or target"
      end

      def deal_damage(caster:, target:)
        target.current_hp -= @skill.power

        target.save
      end
    end
  end
end
